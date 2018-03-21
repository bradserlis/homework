Part One

What command do you use to setup a git repository inside of your folder? 
git init
What command do you use to ask git to start tracking a file? 
git add -A
What command do you use to ask git to move your file from the staging area to the repository?
git commit -m "(comment)"

===
What command do you use to pull any changes from the master repository into your local repository?
git pull
What command do you use to unstage a file?
git reset
What command do you use to change your files back to how they were after a commit?
git checkout -- (filename)
Why is it important to use -- when changing files back to a previous state?
the -- lets git know that you will not be switching branches, and are instead reverting to a previous file version
Why might you want to reset your files back to a previous commit?
A bug may have been encountered in new iterations

===
What command do you use to create a branch?
git branch (branch name)
What command do you use to use a different branch?
git checkout (branch name)
Why would you want to use a branch other than the default master?
working on a feature, or trying to solve a bug in a an environment that will not affect the main app

===
Give an example for when you would use git merge and give an example for when it would be better to submit a pull request to have your branch merged
When a feature / bug has been successful on another branch and you are ready to combine the additional branch back to the main branch and app. If the content is not your own that you were working on, or you anticipate the owner/team may have added additional content that may or may not interact well with the additional branch's code.

What command do you use to send all of the work that you've done locally to your remote repository?
git push

Part 2

Part 3 - Fake Resume Site

