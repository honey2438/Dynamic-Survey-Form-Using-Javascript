// input ids
var survey_options = document.getElementById('survey_options');
var radio_options=document.getElementById('radio_options');
var checkbox_options = document.getElementById('checkbox_options');
var dropdown_options= document.getElementById('dropdown_options');
var date_options=document.getElementById('date_options');

// input add ids
var add_more_fields = document.getElementById('add_more_fields');
var add_radio = document.getElementById('add_radio');
var add_checkbox=document.getElementById('add_checkbox');
var add_dropdown=document.getElementById('add_dropdown');
var add_date_time=document.getElementById('add_date_time');

// input remove ads
var remove_fields = document.getElementById('remove_fields');
var remove_radio_fields=document.getElementById('remove_radio_fields');
var remove_checkbox_fields=document.getElementById('remove_checkbox_fields');
var remove_dropdown_fields=document.getElementById('remove_dropdown_fields');
var remove_date_fields=document.getElementById('remove_date_fields');

add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class','survey_options');
  newField.setAttribute('placeholder','Question Field');
  survey_options.appendChild(newField);
}
add_radio.onclick = function(){
  var newOption= document.createElement('input');
  newOption.setAttribute('type','text');
  newOption.setAttribute('name','radio_options[]');
  newOption.setAttribute('class','radio_options');
  newOption.setAttribute('placeholder','Option Field');
  radio_options.appendChild(newOption);
  radio_options.appendChild(newOption.cloneNode(true));
  radio_options.appendChild(newOption.cloneNode(true));
  remove_radio_fields.style.display='block';
  remove_radio_fields.style.marginLeft='90px';
  radio_options.appendChild(remove_radio_fields);
}
add_checkbox.onclick = function(){
  var newOption= document.createElement('input');
  newOption.setAttribute('type','text');
  newOption.setAttribute('name','radio_options[]');
  newOption.setAttribute('class','radio_options');
  newOption.setAttribute('placeholder','Option Field');
  remove_checkbox_fields.style.display='block';
  checkbox_options.appendChild(newOption);
  checkbox_options.appendChild(newOption.cloneNode(true));
  checkbox_options.appendChild(newOption.cloneNode(true));
  remove_checkbox_fields.style.marginLeft='90px';
  checkbox_options.appendChild(remove_checkbox_fields);
}
add_dropdown.onclick = function(){
  var newOption= document.createElement('input');
  newOption.setAttribute('type','text');
  newOption.setAttribute('name','radio_options[]');
  newOption.setAttribute('class','radio_options');
  newOption.setAttribute('placeholder','Option Field');
 remove_dropdown_fields.style.display='block';
  dropdown_options.appendChild(newOption);
  dropdown_options.appendChild(newOption.cloneNode(true));
  dropdown_options.appendChild(newOption.cloneNode(true));
  remove_dropdown_fields.style.marginLeft='90px';
  dropdown_options.appendChild(remove_dropdown_fields);
}
add_date_time.onclick = function(){
  var newOption= document.createElement('input');
  newOption.setAttribute('type','text');
  newOption.setAttribute('name','radio_options[]');
  newOption.setAttribute('class','radio_options');
  newOption.setAttribute('placeholder','Option Field');
  remove_date_fields.style.display='block';
  date_options.appendChild(newOption);
  date_options.appendChild(newOption.cloneNode(true));
  date_options.appendChild(newOption.cloneNode(true));
  remove_date_fields.style.marginLeft='90px';
  date_options.appendChild(remove_date_fields);
}
remove_radio_fields.onclick = function(){
  var input_tags = radio_options.getElementsByTagName('input');
  radio_options.removeChild(input_tags[(input_tags.length) - 1]);
}
remove_checkbox_fields.onclick =function(){
  var input_tags = checkbox_options.getElementsByTagName('input');
  checkbox_options.removeChild(input_tags[(input_tags.length) - 1]);
}
remove_dropdown_fields.onclick =function(){
  var input_tags = dropdown_options.getElementsByTagName('input');
  dropdown_options.removeChild(input_tags[(input_tags.length) - 1]);
}
remove_date_fields.onclick =function(){
  var input_tags = date_options.getElementsByTagName('input');
  date_options.removeChild(input_tags[(input_tags.length) - 1]);
}