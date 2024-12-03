import { renderSimilarList, clearSimilarList } from './similar-list.js';
import { isEscapeKey, isEnterKey } from './util.js';

const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = userModalElement.querySelector('.setup-close');

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  renderSimilarList();

  document.addEventListener('keydown', onDocumentKeyDown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  clearSimilarList();

  document.removeEventListener('keydown', onDocumentKeyDown);
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
