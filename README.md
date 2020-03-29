# corona-form
Corona form

To view the WebApp, click on this link: 

The results of this app are generated are based on the following key points.
  1. Each symptom written here contains its own weightages.
  2. When the user selects a symptoms, weightage of that symptom is added to a variable.
  3. Aggregate weightage for symptoms is then stored in the variable.
  4. User is shown recommendations based on the value of that variable.

The weightages of each of the symptoms is as follows:
  cough -> 1
  runny nose -> 1
  diarrhea -> 1
  sore throat -> 1
  body aches -> 1
  headache -> 1
  fever -> 1
  difficulty in breathe -> 2
  fatigue -> 2
  travelled in last 14 days -> 3
  travel history to covid19 infected areas-> 3
  contact with any covid19 infected person -> 3
  
  
 Results are based on the following values of the variable:
  	if value of variable is between:
      0-2 : "Observe.. Maybe related to Stress"
      3-5 : "Rehydrate and observe personal hygiene. Re-evaluate after 2 days"
      6-12: "Seek consultation with Doctor"
      13-24: "Reach out to Doctor immediately"
