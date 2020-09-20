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

12. For installing husky along with lint-staged: 
    1.  > npm i -D husky lint-staged 
    2.  > add "lint-staged": {
                "src/**/*.{js,jsx,css}": [
                "npm run lint",
                "prettier --write",
                "git add ."
                ]
                },
                "husky": {
                    "hooks": {
                    "pre-commit": "lint-staged"
                    }
                },

    This will help in doing the linting process for the staged files.

13. Also we can try for the name of the branch checking using pre-push hook using "branch-naming-check" plugin

14. Some of the quick relevant video sources are below :-
    1.  https://www.youtube.com/watch?v=qhuFviJn-es 
    2.  https://www.youtube.com/watch?v=clzTwZgMlqE&t=7s&ab_channel=TheCodingTrain
    3.  https://www.youtube.com/watch?v=SydnKbGc7W8&t=4s&ab_channel=TraversyMedia
    4.  https://www.youtube.com/watch?v=bfyI9yl3qfE&ab_channel=Manorisms
    5.  https://www.youtube.com/watch?v=-qHA6zbOdLc&ab_channel=MoHo
    6.  https://www.youtube.com/watch?v=6u9gmwTl3bY&ab_channel=CodeRealm
    7.  https://www.youtube.com/watch?v=U-R_882UGPM&ab_channel=DylanIsrael




