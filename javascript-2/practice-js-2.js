/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "A software that communicates transports data between a personal computer and the internet (specifically GitHub)."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "Basically a cloud storage platform for code. (Also useful for showing what you are capable of *from what I hear*)"

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: "This starts a connection between a personal computer and the software git. This is absolutely necessary to use the git program. Git will be initialized specifically on the directory you are on when you have run this command. A hidden git file will be added to the directory",
    code: "git init"
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {
    description: "Before running this command you will absolutely need to have created a repository in your GitHub. Copy the URL, and then you can run this command. What it does is copy the code files from GitHub and puts them on your computer! Super nifty! Now you can work away on your IDE!",
    code: "git clone <url>"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {
    description: "This gives you the current status of your code. Has it been staged? Has it been pushed? Find out with this command today!",
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description: "This adds your files to the staging area. Before you have added them to the staging area, make sure that you have made all of the changes that you want. Then get ready to commit! The command that I show will add all of the files in the directory to be staged. I believe this is how I will always do it. But if you really want, you can do one file at a time I guess with just add",
    code: "git add ."
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description: "You are ready to save your changes locally on your personal computer! Commit with a short message of what you did! *you are not done yet. Remember that you need to push these changes up to GitHub!",
    code: "git commit -m'yourMessageHere'"
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

let addRemote = {
    description: "This is something I haven't really done or practiced. BUT I think what id does is is similar to the git clone command. Except in this case I can grab files locally and create a shorthand name for it? I don't know why this will be useful yet, but I am sure it will be later. Found the command on git-scm.com",
    code: "git remote add <shortname> <url>"
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description: "The final step to get you new code from your computer pushed online to GitHub repository.",
    code: "git push"
}
