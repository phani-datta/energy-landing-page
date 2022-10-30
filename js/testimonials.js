function testimonials(event){
    if(event.target.value === "1"){
        document.getElementById("testimonial").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit veritatis minima porro, ipsum cum explicabo magni dignissimos rem et quam officiis obcaecati amet similique, ducimus enim quibusdam. Veniam, distinctio."
        document.getElementById("userName").innerHTML = "Jessica Priston"
        document.getElementById("userDetails").innerHTML = "Engineer, Rosewood, UK"
    } else if(event.target.value === "2"){
        document.getElementById("testimonial").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit veritatis minima porro, ipsum cum explicabo magni dignissimos rem et quam officiis obcaecati amet similique, distinctio ducimus enim quibusdam. Veniam."
        document.getElementById("userName").innerHTML = "Albert Einstein"
        document.getElementById("userDetails").innerHTML = "Engineer, Google, UK"
    } else {
        document.getElementById("testimonial").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit veritatis minima porro, ipsum cum explicabo magni dignissimos rem et quam obcaecati amet similique, ducimus enim quibusdam. Veniam, distinctio officiis."
        document.getElementById("userName").innerHTML = "Courage Stevenn"
        document.getElementById("userDetails").innerHTML = "Manager, Vincent, US"
    }
}