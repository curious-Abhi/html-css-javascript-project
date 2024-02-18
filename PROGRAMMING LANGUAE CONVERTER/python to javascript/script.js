function convert(toLanguage) {
    var inputCode = document.getElementById('input').value;
    var outputTextArea = document.getElementById('output');
  
    if (toLanguage === 'javascript') {
      // Convert to JavaScript (example conversion)
      var convertedCode = convertToJavaScript(inputCode);
      outputTextArea.value = convertedCode;
    } else if (toLanguage === 'python') {
      // Convert to Python (example conversion)
      var convertedCode = convertToPython(inputCode);
      outputTextArea.value = convertedCode;
    } else {
      outputTextArea.value = "Unsupported language!";
    }
  }
  
  function convertToJavaScript(code) {
    // Example conversion from Python to JavaScript
    // Replace this with your actual conversion logic
    return code.replaceAll('print', 'console.log');
  }
  
  function convertToPython(code) {
    // Example conversion from JavaScript to Python
    // Replace this with your actual conversion logic
    return code.replaceAll('console.log', 'print');
  }
  