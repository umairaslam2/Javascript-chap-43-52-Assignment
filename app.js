//------CHAPTER 43-48


//   Task 1

// Show an alert box on click on a link.

//function greet(){
 //   alert('Hello User')
//}

//   Task 2
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// function thanks(){
//     alert('Thanks purchasing phone from us')
// }

//   Task 3
// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// function remove(e){
//     e.parentNode.parentNode.remove()

// }

//  Task 4
//4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// on index.html

// Task 5
// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


// function increase() {
//     var value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     console.log(value)
//     value = value + 1
//     document.getElementById("counter").innerHTML = value
// }
//  function decrease() {
//     var value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     value = value - 1
//     document.getElementById("counter").innerHTML = value
// }


//         Chapter 49-52

//         Task 1

// Task 1
// Create a signup form and display form data in your web page on submission.

// function info(){
// var userName=document.getElementById('name').value;
// var fatherName=document.getElementById('fatherName').value;
// var email=document.getElementById('email').value;
// var number=document.getElementById('no').value;
// document.write('Name : '+userName+'<br>')
// document.write('Fathername: '+fatherName+'<br>')
// document.write('Email: '+email+'<br>')
// document.write('Number :'+number+'<br>')
// }


// Task 2
// Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more" 

// function readMore(){
//     var description='reiciendis, saepe optio nisi dolorum in repellat suscipit itaque aliquid ea iusto quasi blanditiis illum ex nam, officia ipsam neque doloribus';
//     var pera=document.getElementById('pera');
//     pera.innerHTML +=description
// }


// Task 3
// Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row. 


// var table = document.getElementById('recordTable')

// function addRecord(){
//     var studentName = document.getElementById('stdName')
//     var studentClass = document.getElementById('stdClass')
//     var row = document.createElement('tr')
//     var nametd = document.createElement('td')
//     var classtd = document.createElement('td')
//     var edittd = document.createElement('td')
//     var deletetd = document.createElement('td')
//     var nameText = document.createTextNode(studentName.value)
//     var classText = document.createTextNode(studentClass.value)
//     var editBtn = document.createElement('button')
//     var editText = document.createTextNode("Edit")
//     editBtn.setAttribute('onclick','editRecord(this)')
//     editBtn.appendChild(editText)
//     var delBtn = document.createElement('button')
//     var delText = document.createTextNode("Delete")
//     delBtn.setAttribute('onclick','deleteRecord(this)')
//     delBtn.appendChild(delText)
    
//     nametd.appendChild(nameText)
//     classtd.appendChild(classText)
//     edittd.appendChild(editBtn)
//     deletetd.appendChild(delBtn)
//     row.appendChild(nametd)
//     row.appendChild(classtd)
//     row.appendChild(edittd)
//     row.appendChild(deletetd)
//     table.appendChild(row)

//     studentName.value = ""
//     studentClass.value = ""
// }

// function editRecord(e){
//     var val = e.parentNode.parentNode.firstChild.innerText
//     var newVal = prompt("Edit your record",val)
//     var classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
//     var newClass = prompt("Edit your Class",classval)
//     e.parentNode.parentNode.firstChild.innerText = newVal
//     e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
// }

// function deleteRecord(e){
//     e.parentNode.parentNode.remove()
// }

//          End of Chapter 49-52
