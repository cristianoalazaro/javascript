import Sequelize, {Model} from 'sequelize';

import appConfig from '../config/appConfig.js';

class Foto extends Model{
    static init(sequelize){
      super.init({
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate:{
            notEmpty: {
              msg: 'Campo não pode ser vazio',
            }
          }
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate:{
            notEmpty: {
              msg: 'Campo não pode ser vazio',
            }
          }
        },
        url: {
          type: Sequelize.VIRTUAL,
          get(){
            return `${appConfig.url}/images/${this.getDataValue('filename')}`
          }
        },
      },
      {
        sequelize,
        tableName: 'fotos',
      });
      return this;
    }

    static associate(models){
      this.belongsTo(models.Aluno,{foreignKey:'aluno_id'});
      //No módulo de aluno vc também poderia dizer this.hasMany ou this hasOne(e terminar da mesma maneira)
    }
}

export default Foto;