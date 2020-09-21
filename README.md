Steps to review the code:

1. Clone the code from GitLab, link:
2. Do, npm install
3. Debug the app using expo start, connect with any emulator or real device
4. Screen1: Will display the pyramid text in the console [ The default text in the pyramid is ‘DEXHIGH’. But it is dynamic, it can support any text, give it a try]
5. Press ’See next task’
6. Tab1 will have timer: Click on start timer to start timer with 100 seconds. [ The code written is with a dynamic capability, the timer start can be of any time in seconds. Since the requirement is to start the timer in 100 seconds, it is given a default value of 100 seconds. When the app state changes to background the timer will be paused and when it is back to foreground again the timer resumes from the point it paused ], reset the timer using stop and reset
7. Tab2, you will start with a header with an image and text, upon scroll it will transformed into a sticky header. The list will be rendered once the fetch response is returned. The list has two parts, header and body. By default you will see the header and on pressing header you will be able to see the body of the list with more details in it.

Test cases:

- Snapshot testing
- Check for initial timer value
- Click on start
- Check if the timer value is changed
- Check for header visible
- Check for list rendered
- Check is loader displayed on load