 
     let desTag = document.getElementById("design");
	 let bio = [
		 { 
		   id: "fabevy01",
		   pic: "images/bio-pic1 (1).jpg",
		   name: "Arjun",
		   batch: "FED04",
		   branch: "Chennai"
		 },
		 { 
		   id: "fabevy02",
		   pic: "images/bio-pic1 (2).jpg",
		   name: "JaiSuriya",
		   batch: "FED04",
		   branch: "Chennai"
		 },
		 { 
		   id: "fabevy03",
		   pic: "images/bio-pic1 (3).jpg",
		   name: "Mugilan",
		   batch: "FED04",
		   branch: "Chennai"
		 },
		 { 
		   id: "fabevy04",
		   pic: "images/bio-pic1 (4).jpg",
		   name: "Sithes",
		   batch: "FED04",
		   branch: "Chennai"
		 },
		 { 
		   id: "fabevy05",
		   pic: "images/bio-pic1 (5).jpg",
		   name: "Yuvan",
		   batch: "FED04",
		   branch: "Chennai"
		 },
	 ]
	  
	  let bioData = document.getElementById("design");
	 
	   bio.forEach(function(value,i){
		   let boxTag = document.createElement("div");
		   let contentTag = document.createElement("h2");
		    let content2Tag = document.createElement("h2");
			 let content3Tag = document.createElement("h2");
		   let picTag = document.createElement("img");
		   
		   boxTag.setAttribute("class", "model-box");
		   boxTag.setAttribute("id",value.id);
		   
		   picTag.src = value.pic;
		   
		   
		   contentTag.innerText = value.name;
		   content2Tag.innerText = value.batch;
		   content3Tag.innerText = value.branch;
		   
		   boxTag.append(picTag,contentTag,content2Tag,content3Tag);
		   bioData.appendChild(boxTag);

		   
	   });