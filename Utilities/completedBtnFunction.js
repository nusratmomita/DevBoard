function completedBtnUpdate(id){
     document.getElementById(id).addEventListener('click',
        function(){
            alert("Board updated Successfully")

            let incompleteTask = document.getElementById('incomplete-task').innerText;
            const updatedTaskNumber = incompleteTask - 1;
    
            document.getElementById('incomplete-task').innerText = updatedTaskNumber;
    
            const totalTaskCompleted = document.getElementById('totalTaskCompleted').innerText;
            const convertedTotalTaskCompleted = parseInt(totalTaskCompleted);
            const  updatedTaskCompleted = convertedTotalTaskCompleted + 1;
    
            document.getElementById('totalTaskCompleted').innerText = updatedTaskCompleted;
            
         
            const button = document.getElementById(id);
            button.setAttribute("disabled",true);
            button.style.backgroundColor = "lightgrey";        

        }
    )
}