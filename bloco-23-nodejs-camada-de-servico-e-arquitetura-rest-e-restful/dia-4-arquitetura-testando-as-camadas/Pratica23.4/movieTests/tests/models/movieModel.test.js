const sinon = require('sinon');

// const { expect } = require('chai');

const connection = require('../../models/connection');

      before(async () => {
        const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

        sinon.stub(connection, 'execute').resolves(execute);
      });

      // Restauraremos a função `execute` original após os testes.
      after(async () => {
        connection.execute.restore();
      });

