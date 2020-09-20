# es-lint-demo
Sample project to kick start es lint in the projects

**Steps :-**
<hr>

1. Create a Project in your system 

2. Do for getting the package JSON
   > npm init -y 

3. Do for having eslint installed in Project
    > npm install --save-dev eslint as the dev dependency

5. Post that initialize the eslint to start
   > ./node_modules/.bin/eslint --init

6. This will pose certain questions on the screen that you can answer based on the project requirement you have.
   1. Like which projects structure 
   2. Which style guide 
   3. Which place code will run browser or Node

7. Also in the last we might have to install the peer dependencies.

8. for running eslint we can add scripts in package json like below :-
    > "lint" : "eslint ./src"

9. To fix all the errors do below :-
   1.  > CTRL + p 
   2.  > select "Eslint: fix all autofixable issues"     

10. You can choose to turn-off the like 
    >rules :{"no-console":'off'}
    This will turn off the rules completely.

11. how we can use the husky plugin for implementing the Git hooks
    1.  pre-commit 
    2.  pre-push 


