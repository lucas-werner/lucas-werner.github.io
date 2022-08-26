window.onload = function () {

  const estadosSelect = document.getElementById('estado');
  const estadosList = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

  estadosList.forEach(estado => {
    option = new Option(estado, estado.toLowerCase());
    estadosSelect.options[estadosSelect.options.length] = option;
  });

}

const hubsList = ['Selecione', 'Belo Horizonte-MG', 'São Paulo-SP', 'Florianópolis-SC', 'Itajubá-MG']
  const hubsSelect = document.getElementById('hubList');


  $('#hub').click(function () {
    if ($('#hub').is(':checked')) {
      $('<select>').appendTo('#hubList');
      let select = document.getElementsByTagName('select')[1];
      select.setAttribute('id', 'hubs');         
      hubsList.forEach(local => {           
      let option = new Option(local, local.toLowerCase());
      console.log(option)
      const hubsSelect = document.getElementById('hubs');
      hubsSelect.options[hubsSelect.options.length] = option;     
});

     
    }
  });

  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    yearRange: "1960:2002",
    toString(date, format) {
          const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

new window.JustValidate('.cv', {
  Messages: {
    required: 'The field is required',
    email: 'Please, type a valid email',
    maxLength: 'The field must contain a maximum of :value characters',
    minLength: 'The field must contain a minimum of :value characters',
    password: 'Password is not valid',
    remote: 'Email already exists'
  },
});