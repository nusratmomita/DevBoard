function makeAList(id1,id2){

        const btn = document.getElementById(id1).addEventListener('click',function(){// completed-btn-one
        
        const task = document.getElementById(id2).innerText;// task-one
        const clearHistory = document.getElementById('sidebar');
        
        const time = new Date();

        const list = document.createElement('h1'); 
        list.innerText = `You have completed the task ${task} at ${time.toLocaleTimeString()}`;
        list.classList.add("bg-gray-200")
        list.classList.add("p-3")
        list.classList.add("rounded-xl")
        list.classList.add("font-bold")

        clearHistory.appendChild(list);
        

        const tasks = clearHistory.getElementsByTagName('h1');
        if(tasks.length === 6){
            alert("Congrates! You have completed all the current tasks")
        }
    })
    
} 

function clearHistoryBtn(id){
        const btnDelete = document.getElementById(id).addEventListener('click',function(){
        const clearHistory = document.getElementById('sidebar');
        const tasks = clearHistory.getElementsByTagName('h1');// an array like oject returned
        // console.log(tasks.length);
        while (tasks.length > 0) {
            // console.log(tasks[0]);
            tasks[0].remove();// removing the 1st ele of the array-like object
        }
    })
}