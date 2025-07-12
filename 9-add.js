function add(a, b) {
      return a + b;
    }

    const button = document.getElementById('addButton');

    button.addEventListener('click', () => {
      const a = parseInt(document.getElementById('num1').value, 10);
      const b = parseInt(document.getElementById('num2').value, 10);

      console.log(add(a, b));
    });
