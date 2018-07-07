'use strict'

var userSetup = document.querySelector('.setup');
var setupSimilarList = document.querySelector('.setup-similar-list');
userSetup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var wizardSimilarTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var fragmentWithWizards = document.createDocumentFragment();

var names = ['Иван', 'Хуан Себастьян', 'Мария','Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

//Вспомогательная функция для получения рандомного значения любого массива.
var randomItem = function(array){
    var item = array[Math.floor(Math.random()*array.length)];
    return item;
}  

//Генерируем массив с обьектами для каждого волшебника
function createWizardsArray(len){
    for(var i = 0, array = []; i < len; i++) {
      array.push({'name': randomItem(names) +' '+ randomItem(surnames),
                'coatColor': randomItem(coatColors),
                'eyesColor': randomItem(eyesColors)
    });
    }
    return array;
  }
  var wizards = createWizardsArray(4);


 
//Функция для создания dom ноды по шаблону
  var createWizardNode = function(wizard){
      var wizardsSimilarElement = wizardSimilarTemplate.cloneNode(true);
      wizardsSimilarElement.querySelector('.setup-similar-label').textContent = wizards[j].name;
      wizardsSimilarElement.querySelector('.wizard-coat').style.fill = wizards[j].coatColor;
      wizardsSimilarElement.querySelector('.wizard-eyes').style.fill = wizards[j].eyesColor;
      return wizardsSimilarElement;
  };

  //цикл, добавляющий необходимое количество dom элементов во фрагмент
 for(var j = 0; j < wizards.length; j++){
    fragmentWithWizards.appendChild(createWizardNode(wizards[j]));
 }

 //Добавляем фрагмент в нужное место dom дерева
  setupSimilarList.appendChild(fragmentWithWizards);
  