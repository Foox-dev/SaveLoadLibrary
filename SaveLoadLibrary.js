// SaveLoadLibrary.js

// Define your library object
const SaveLoadLibrary = {
    save: function (key, data) {
      try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(key, jsonData);
        return true;
      } catch (error) {
        console.error('Error saving data to localStorage:', error);
        return false;
      }
    },
    
    load: function (key) {
      try {
        const jsonData = localStorage.getItem(key);
        if (jsonData) {
          return JSON.parse(jsonData);
        }
        return null;
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
        return null;
      }
    },
    
    clear: function (key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error clearing data from localStorage:', error);
      }
    },

    ping: function () {
        return 'Ping';
    },
  };
  
  // Export the library for use in other scripts
  export default SaveLoadLibrary;