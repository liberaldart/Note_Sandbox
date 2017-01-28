import { selectUser } from '../dev/js/actions/selectUser_action';

describe('create select use action', () => {
    it('should create action object for selected user', () => {
        const user = {
            name: "Amit",
            last: "Singh"
        }

        const expectedAction = {
            type: 'USER_SELECTED',
            payload: user
        }

        expect(selectUser(user)).toEqual(expectedAction);
    })
})