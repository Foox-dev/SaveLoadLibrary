// SaveLoadLibrary.js

// Define your library object as a property of the global window object
window.SaveLoadLibrary = {
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
    }
  };