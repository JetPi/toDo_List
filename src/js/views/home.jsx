import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState({
		name: "",
		isDone: false
	})

	const [listTask, setListTask] = useState([])

	const addTask = (event) =>{
		if(event.key === "Enter" && event.target.value !== ""){
		setListTask([
			...listTask,
			task
		])
		setTask({
			...task, name: ""
		})
	}}

	const handleTaskValue  = (givenTask) =>{
		setTask({
			...task,
			[givenTask.target.name]: givenTask.target.value
		})
	}

	const deleteTask = (id) =>{
		let newList = listTask.filter((item, index) => {
			if(id !== index){
				return item
			}
		})
		setListTask(newList)
	}

	return (
		<>
		<div className="container d-flex justify-content-center">
			<div className="row">
				<div className="col-12 d-flex justify-content-center">
				<h1 className="fancy topText">TODOS</h1>
				</div >
				<div className="col-12">
					<input 
						className="fancy inputText"
						onChange={handleTaskValue} 
						onKeyDown={addTask} 
						name="name" value={task.name} 
						placeholder="What is on your mind?" 
						type="text"
					/>
				</div>
				<div className="col-12 ">
					<ul>
						{listTask.map(
							(element, index) => {
							return	(
								<div className="col-12 fancy inputText d-flex justify-content-between py-1" key={index}>
									{element.name}
									<button className=" fancy btn btn-secondary" onClick={() => deleteTask(index)}>Delete</button>
								</div>	
							)}
						)}
					</ul>
				</div>
				<div className="col-12 d-flex justify-content-left fancy fs-1">
					Items on list: {listTask.length}
				</div>			
			</div>
		</div>
		
		</>
	);
};

export default Home;
