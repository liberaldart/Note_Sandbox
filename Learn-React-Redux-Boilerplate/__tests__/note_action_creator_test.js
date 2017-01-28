import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger';
import nock from 'nock'
import expect from 'expect' // You can use any testing library

import { saveNotes, fetchNotes } from '../dev/js/actions/notes_action'

const middlewares = [ promise(), thunk, logger() ]
const mockStore = configureMockStore(middlewares)

describe("async actions", () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it("sends action", () => {
        nock("http://localhost:9200")
            .get("/subject/note/_search")
            .reply(200, { body: { front: "Some front", back: "Some back" } })
        
        const expectedAction = { type: "FETCH_NOTES_FULFILLED", payload: { front: "Some front", back: "Some back" } }
        
        const store = mockStore({
            notes: {}
        });

        return store.dispatch(fetchNotes())
            .then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })


    })
})

