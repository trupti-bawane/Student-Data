$(document).ready(function(){
    var students = [];

    $('#studentForm').submit(function(e){
        e.preventDefault();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var age = $('#age').val();
        var birthdate = $('#birthdate').val();
        var address = $('#address').val();
        var department = $('#department').val();
        addStudent(name, gender, age, birthdate, address, department);
        $('#name, #age, #birthdate, #address, #department').val('');
    });

    function addStudent(name, gender, age, birthdate, address, department) {
        var student = { name: name, gender: gender, age: age, birthdate: birthdate, address: address, department: department };
        students.push(student);
        displayStudents();
    }

    function displayStudents() {
        $('#studentList').empty();
        $.each(students, function(index, student){
            var row = '<tr>';
            row += '<td>' + student.name + '</td>';
            row += '<td>' + student.gender + '</td>';
            row += '<td>' + student.age + '</td>';
            row += '<td>' + student.birthdate + '</td>';
            row += '<td>' + student.address + '</td>';
            row += '<td>' + student.department + '</td>';
            row += '<td><button class="edit-btn" data-index="' + index + '">Edit</button><button class="delete-btn" data-index="' + index + '">Delete</button></td>';
            row += '</tr>';
            $('#studentList').append(row);
        });
    }

    $('#studentList').on('click', '.edit-btn', function(){
        var index = $(this).data('index');
        var student = students[index];
        var newName = prompt('Enter new name:', student.name);
        var newAge = prompt('Enter new age:', student.age);
        if (newName !== null && newAge !== null) {
            students[index] = { name: newName, gender: student.gender, age: newAge, birthdate: student.birthdate, address: student.address, department: student.department };
            displayStudents();
        }
    });

    $('#studentList').on('click', '.delete-btn', function(){
        var index = $(this).data('index');
        students.splice(index, 1);
        displayStudents();
    });
});
