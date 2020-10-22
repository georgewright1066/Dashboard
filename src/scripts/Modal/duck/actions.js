import types from './types.js';



const showModal = (data) => ({
  type: types.SHOW_MODAL,
  modalType: data,
  modalProps: data
});

const hideModal = () => ({
  type: types.HIDE_MODAL,
});


const deletePost = (id) => ({
  type: types.DELETE_POST,
  id: id
});



export default {
  showModal,
  hideModal,
  deletePost

};


