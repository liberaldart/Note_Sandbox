# What kind of data needs to be stored in the application?

The information you store is the information you want to retreive:

What that means is that a company (a startup in our case) needs to store the information about the entities it 
cares about. For doing this the application needs to have views to enter the information about the entities and 
also to display the information about a single such entity and a group of such entities.

# What could be the possible use cases?

The application we are building is an information store. Most of the applications are information stores and 
some are control applications.

information stores store the usage information of users

# Does the application act upon the information it stores?

Yes. The application sends notifications to the user with information that matters to that user.

# Does the application put rules for it's users to adhere to?

Yes. The application let's user create a finite number of learning tasks and needs the user to be clocked-in
to a particular task. While clocked-in the user can create notes with a root tag that identifies the learning
task.

# What kind of questions a learner would need to be answered?

There could be questions like, 

	how many notes did I create for a particular learning task? 
	And how many of those notes have been marked for spaced repetition?
