Live demo: http://zaneray.github.io/outdoor-research/

# Outdoor Research Style Guide
The Outdoor Research Style Guide, developed by The ZaneRay Group, is a living Style Guide that may be updated as necessary.  A gruntfile.js has been included with this project in order to compile the outdoor-research.less file into the requisite outdoor-research.css file with the necessary CSS3 vendor prefixes. 

To run the gruntfile, you must have node.js installed locally (node is installed by default on Macs). After cloning the project, navigate to the /outdoor-research root directory in a terminal window.  Run 'npm-install' (you may need to do so as the root user).  Next, run 'bower-install'.  You should now be able to run the 'grunt' command, which will start the grunt watch process.  While grunt watch is running in your terminal, anytime the outdoor-research.less file is changed, and grunt build will be fired off that will recreate the outdoor-research.css file based off of your latest changes to the less file.
