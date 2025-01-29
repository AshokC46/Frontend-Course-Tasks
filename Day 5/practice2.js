

let courseName = "JavaScript";

function practiceScope() {
    let topic = "Variables";
    console.log(courseName + " - " + topic);
    
    if (true) {
        let detail = "Exploring scopes";
        console.log(detail);
    }
    
}

practiceScope();
