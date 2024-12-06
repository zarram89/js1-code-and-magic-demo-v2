const similarElement = document.querySelector('.setup-similar');

const similarListElement = similarElement.querySelector('.setup-similar-list');

const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const renderSimilarList = (similarWizards) => {
  const similarListFragment = document.createDocumentFragment();

  similarWizards.forEach(({name, colorCoat, colorEyes}) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = name;
    wizardElement.querySelector('.wizard-eyes').style.fill = colorEyes;
    wizardElement.querySelector('.wizard-coat').style.fill = colorCoat;
    similarListFragment.appendChild(wizardElement);
  });

  similarListElement.appendChild(similarListFragment);
  similarElement.classList.remove('hidden');
};

const clearSimilarList = () => {
  similarListElement.innerHTML = '';
};

export { renderSimilarList, clearSimilarList };
