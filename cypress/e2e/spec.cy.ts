describe('The Weather Forecast Page', () => {
    it('successfully loads', () => {
        cy.visit('/') // change URL to match your dev URL
    })
})

describe('The Weather Forecast Page', () => {
    it('gets the station dropdown', () => {
        cy.visit('/')

        cy.get('[data-cy="stations"]')
    })
})

describe('The Weather Forecast Page', () => {
    it('has atleast one forecast', () => {
        cy.visit('/')
        cy.get('[data-cy="forecast-table"]')
            .find("tr")
            .then((row) => {
                expect(row.length).to.be.above(1);
            });
    })
})

describe('When selecting a station in the stations dropdown', () => {
    it('changes the forecast table', () => {
        cy.visit('/')
        cy.get('[data-cy="stations"]').click();
        cy.contains('Akureyri').click();
            // .find("li")
            // .then((item) => {
            //     console.log(item.length);
            //     cy.log(item.length.toString());
            //     expect(item.length).to.be.above(1);
            // });
    })
})
