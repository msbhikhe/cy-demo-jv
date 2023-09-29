import moment from 'moment';

const computer = function (name, introduced, discontinued, company) {
    this.name = name;
    this.introduced = introduced === '' ? '' : moment(introduced).format('YYYY-MM-DD');
    this.discontinued = discontinued === '' ? '' : moment(discontinued).format('YYYY-MM-DD');
    this.company = company;
};

export default computer;
