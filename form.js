
// input add ids
var all_option_top = document.getElementById('all_option_top');
var add_question = document.getElementById('add_question');
var add_radio = document.getElementById('add_radio');
var add_checkbox = document.getElementById('add_checkbox');
var add_dropdown = document.getElementById('add_dropdown');
var add_date_time = document.getElementById('add_date_time');
var client_form = document.getElementById('client_form');

// input remove ids
var remove_question_fields = document.getElementById('remove_question_fields');
var remove_fields = document.getElementById('remove_fields');
var remove_radio_fields = document.getElementById('remove_radio_fields');
var remove_checkbox_fields = document.getElementById('remove_checkbox_fields');
var remove_dropdown_fields = document.getElementById('remove_dropdown_fields');
var remove_date_fields = document.getElementById('remove_date_fields');

// button
var form_btn = document.createElement('button');
form_btn.setAttribute('type', 'submit')
form_btn.setAttribute('id', 'form_btn');
form_btn.style.display = 'none';
form_btn.innerHTML = 'Submit';
client_form.appendChild(form_btn);

// functions

var i = 0;
var j = 0;

add_question.onclick = function () {
  i++;
  var question_option = document.createElement('div');
  question_option.setAttribute('class', 'all_option');
  question_option.setAttribute('id', 'question_option');
  all_option_top.appendChild(question_option);

  j++;

  var question_option_inner = document.createElement('div');
  question_option_inner.setAttribute('class', 'question_option');
  question_option_inner.setAttribute('id', 'question_option_inner');
  question_option.appendChild(question_option_inner);

  var newques = document.createElement('span');
  newques.style.color = 'black';
  newques.innerHTML = 'Q' + j;
  question_option_inner.appendChild(newques);

  var newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('name',  i+'text');
  newField.setAttribute('class', 'survey_options');
  newField.setAttribute('placeholder', 'Enter the Question');
  question_option_inner.appendChild(newField);

  var removeField = document.createElement('a');
  removeField.style.color = 'green';
  removeField.innerHTML = 'Remove Question';
  question_option_inner.appendChild(removeField);

  removeField.onclick = function () {
    var input_tags = question_option.getElementsByTagName('input');
    question_option.remove(input_tags[(input_tags.length) - 1]);
    i=i-1;
  }

  if (form_btn.style.display == 'none') {
    form_btn.style.display = 'block';
  }

}

// radio options

add_radio.onclick = function () {

  var radio_option = document.createElement('div');
  radio_option.setAttribute('class', 'all_option');
  radio_option.setAttribute('id', 'radio_option');
  all_option_top.appendChild(radio_option);

  var radio_option_inner = document.createElement('div');
  radio_option_inner.setAttribute('class', 'radio_option');
  radio_option_inner.setAttribute('id', 'radio_option_inner');
  radio_option.appendChild(radio_option_inner);

  j++;
  var newques = document.createElement('span');
  newques.style.color = 'black';
  // newques.style.border='1px solid red';
  newques.innerHTML = 'Q' + j;
  radio_option_inner.appendChild(newques);
  i++;
  var newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('name', i+'text');
  newField.setAttribute('class', 'survey_options');
  newField.setAttribute('placeholder', 'Enter the Question');
  radio_option_inner.appendChild(newField);

  var removeField = document.createElement('a');
  removeField.style.color = 'green';
  removeField.innerHTML = 'Remove Question';
  radio_option_inner.appendChild(removeField);

  removeField.onclick = function () {
    var input_tags = radio_option.getElementsByTagName('input');
    radio_option.remove(input_tags[(input_tags.length) - 1]);
    i=i-5;
  }
  i++;
  var newOption = document.createElement('input');
  newOption.setAttribute('type', 'text');
  newOption.setAttribute('name', i+'radio');
  newOption.setAttribute('class', 'radio_options');
  newOption.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption1 = document.createElement('input');
  newOption1.setAttribute('type', 'text');
  newOption1.setAttribute('name', i + 'radio');
  newOption1.setAttribute('class', 'radio_options');
  newOption1.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption2 = document.createElement('input');
  newOption2.setAttribute('type', 'text');
  newOption2.setAttribute('name', i + 'radio');
  newOption2.setAttribute('class', 'radio_options');
  newOption2.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption3 = document.createElement('input');
  newOption3.setAttribute('type', 'text');
  newOption3.setAttribute('name', i + 'radio');
  newOption3.setAttribute('class', 'radio_options');
  newOption3.setAttribute('placeholder', 'Enter Option');

  newOption.style.marginLeft = '40px';
  newOption1.style.marginLeft = '40px';
  newOption2.style.marginLeft = '40px';
  newOption3.style.marginLeft = '40px';


  radio_option.appendChild(newOption);
  radio_option.appendChild(newOption1);
  radio_option.appendChild(newOption2);
  radio_option.appendChild(newOption3);

  var remove_radio_fields = document.createElement('a');
  remove_radio_fields.style.display = 'block';
  remove_radio_fields.innerHTML = 'remove';
  remove_radio_fields.style.color = 'black';

  remove_radio_fields.style.marginLeft = '135px';
  radio_option.appendChild(remove_radio_fields);

  remove_radio_fields.onclick = function () {
    var input_tags = radio_option.getElementsByTagName('input');
    radio_option.removeChild(input_tags[(input_tags.length) - 1]);
    i=i-1;
    var remove_remove_radio_fields = remove_radio_fields.getElementsByTagName('a');
    if (input_tags.length == 0) {
      remove_radio_fields.remove(remove_remove_radio_fields[(remove_remove_radio_fields.length) - 1]);
    }
  }

  if (form_btn.style.display == 'none') {
    form_btn.style.display = 'block';
  }
}

// checkbox options

add_checkbox.onclick = function () {

  var checkbox_option = document.createElement('div');
  checkbox_option.setAttribute('id', 'checkbox_option');
  checkbox_option.setAttribute('class', 'all_option');
  all_option_top.appendChild(checkbox_option);

  var checkbox_option_inner = document.createElement('div');
  checkbox_option_inner.setAttribute('class', 'checkbox_option');
  checkbox_option_inner.setAttribute('id', 'checkbox_option_inner');
  checkbox_option.appendChild(checkbox_option_inner);

  i++; j++;

  var newques = document.createElement('span');
  newques.style.color = 'black';
  newques.innerHTML = 'Q' + j;
  checkbox_option_inner.appendChild(newques);

  var newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('name', i + 'text');
  newField.setAttribute('class', 'survey_options');
  newField.setAttribute('placeholder', 'Enter the Question');
  checkbox_option_inner.appendChild(newField);

  var removeField = document.createElement('a');
  removeField.style.color = 'green';
  removeField.innerHTML = 'Remove Question';
  checkbox_option_inner.appendChild(removeField);

  removeField.onclick = function () {
    var input_tags = checkbox_option.getElementsByTagName('input');
    checkbox_option.remove(input_tags[(input_tags.length) - 1]);
    i=i-5;
  }

  i++;
  var newOption = document.createElement('input');
  newOption.setAttribute('type', 'text');
  newOption.setAttribute('name', i + 'checkbox');
  newOption.setAttribute('class', 'radio_options');
  newOption.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption1 = document.createElement('input');
  newOption1.setAttribute('type', 'text');
  newOption1.setAttribute('name', i + 'checkbox');
  newOption1.setAttribute('class', 'radio_options');
  newOption1.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption2 = document.createElement('input');
  newOption2.setAttribute('type', 'text');
  newOption2.setAttribute('name', i + 'checkbox');
  newOption2.setAttribute('class', 'radio_options');
  newOption2.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption3 = document.createElement('input');
  newOption3.setAttribute('type', 'text');
  newOption3.setAttribute('name', i + 'checkbox');
  newOption3.setAttribute('class', 'radio_options');
  newOption3.setAttribute('placeholder', 'Enter Option');

  newOption.style.marginLeft = '40px';
  newOption1.style.marginLeft = '40px';
  newOption2.style.marginLeft = '40px';
  newOption3.style.marginLeft = '40px';

  checkbox_option.appendChild(newOption);
  checkbox_option.appendChild(newOption1);
  checkbox_option.appendChild(newOption2);
  checkbox_option.appendChild(newOption3);

  var remove_checkbox_fields = document.createElement('a');
  remove_checkbox_fields.style.display = 'block';
  remove_checkbox_fields.innerHTML = 'remove';
  remove_checkbox_fields.style.color = 'black';
  remove_checkbox_fields.style.marginLeft = '135px';
  checkbox_option.appendChild(remove_checkbox_fields);

  remove_checkbox_fields.onclick = function () {
    var input_tags = checkbox_option.getElementsByTagName('input');
    checkbox_option.removeChild(input_tags[(input_tags.length) - 1]);
    i=i-1;
    var remove_remove_checkbox_fields = remove_checkbox_fields.getElementsByTagName('a');
    if (input_tags.length == 0) {
      remove_checkbox_fields.remove(remove_remove_checkbox_fields[(remove_remove_checkbox_fields.length) - 1]);
    
    }
  }

  if (form_btn.style.display == 'none') {
    form_btn.style.display = 'block';
  }
}

// dropdown options

add_dropdown.onclick = function () {
  j++;
  var dropdown_option = document.createElement('div');
  dropdown_option.setAttribute('class', 'all_option');
  dropdown_option.setAttribute('id', 'dropdown_option');
  all_option_top.appendChild(dropdown_option);

  var dropdown_option_inner = document.createElement('div');
  dropdown_option_inner.setAttribute('class', 'dropdown_option');
  dropdown_option_inner.setAttribute('id', 'dropdown_option_inner');
  dropdown_option.appendChild(dropdown_option_inner);

  var newques = document.createElement('span');
  newques.style.color = 'black';
  newques.innerHTML = 'Q' + j;
  dropdown_option_inner.appendChild(newques);


  i++;
  var newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('name', i + 'text');
  newField.setAttribute('class', 'survey_options');
  newField.setAttribute('placeholder', 'Enter the Question');
  dropdown_option_inner.appendChild(newField);

  var removeField = document.createElement('a');
  removeField.style.color = 'green';
  removeField.innerHTML = 'Remove Question';
  dropdown_option_inner.appendChild(removeField);

  removeField.onclick = function () {
    var input_tags = dropdown_option.getElementsByTagName('input');
    dropdown_option.remove(input_tags[(input_tags.length) - 1]);
  }

  i++;
  var newOption = document.createElement('input');
  newOption.setAttribute('type', 'text');
  newOption.setAttribute('name', i + 'dropdown');
  newOption.setAttribute('class', 'radio_options');
  newOption.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption1 = document.createElement('input');
  newOption1.setAttribute('type', 'text');
  newOption1.setAttribute('name', i + 'dropdown');
  newOption1.setAttribute('class', 'radio_options');
  newOption1.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption2 = document.createElement('input');
  newOption2.setAttribute('type', 'text');
  newOption2.setAttribute('name', i + 'dropdown');
  newOption2.setAttribute('class', 'radio_options');
  newOption2.setAttribute('placeholder', 'Enter Option');
  i++;
  var newOption3 = document.createElement('input');
  newOption3.setAttribute('type', 'text');
  newOption3.setAttribute('name', i + 'dropdown');
  newOption3.setAttribute('class', 'radio_options');
  newOption3.setAttribute('placeholder', 'Enter Option');

  newOption.style.marginLeft = '40px';
  newOption1.style.marginLeft = '40px';
  newOption2.style.marginLeft = '40px';
  newOption3.style.marginLeft = '40px';

  dropdown_option.appendChild(newOption);
  dropdown_option.appendChild(newOption1);
  dropdown_option.appendChild(newOption2);
  dropdown_option.appendChild(newOption3);

  var remove_dropdown_fields = document.createElement('a');
  remove_dropdown_fields.style.display = 'block';
  remove_dropdown_fields.innerHTML = 'remove';
  remove_dropdown_fields.style.color = 'black';

  remove_dropdown_fields.style.marginLeft = '135px';
  dropdown_option.appendChild(remove_dropdown_fields);

  remove_dropdown_fields.onclick = function () {
    var input_tags = dropdown_option.getElementsByTagName('input');
    dropdown_option.removeChild(input_tags[(input_tags.length) - 1]);
    i=i-1;
    var remove_remove_dropdown_fields = remove_dropdown_fields.getElementsByTagName('a');
    if (input_tags.length == 0) {
      remove_dropdown_fields.remove(remove_remove_dropdown_fields[(remove_remove_dropdown_fields.length) - 1]);
     
    }
  }

  if (form_btn.style.display == 'none') {
    form_btn.style.display = 'block';
  }
}

// date options

add_date_time.onclick = function () {

  var date_option = document.createElement('div');
  date_option.setAttribute('id', 'date_option');
  date_option.setAttribute('class', 'all_option');
  all_option_top.appendChild(date_option);
  i++; j++;

  var date_option_inner = document.createElement('div');
  date_option_inner.setAttribute('class', 'date_option');
  date_option_inner.setAttribute('id', 'date_option_inner');
  date_option.appendChild(date_option_inner);

  var newques = document.createElement('span');
  newques.style.color = 'black';
  newques.innerHTML = 'Q' + j;
  date_option_inner.appendChild(newques);

  var newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('name', i + 'text');
  newField.setAttribute('class', 'survey_options');
  newField.setAttribute('placeholder', 'Enter the Question');
  date_option_inner.appendChild(newField);

  var removeField = document.createElement('a');
  removeField.style.color = 'green';
  removeField.innerHTML = 'Remove Question';
  date_option_inner.appendChild(removeField);

  removeField.onclick = function () {
    var input_tags = date_option.getElementsByTagName('input');
    date_option.remove(input_tags[(input_tags.length) - 1]);
    i=i-1;
  }

  if (form_btn.style.display == 'none') {
    form_btn.style.display = 'block';
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  const dat=JSON.stringify(value);
  console.log({ dat });
}
client_form.addEventListener('submit', handleSubmit);