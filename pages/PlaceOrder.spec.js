exports.PlaceOrder = class PlaceOrder
{
  constructor(page)
  {
     this.page = page
     this.placeOrder = "//button[normalize-space()='Place Order']"
     this.name = '#name'
     this.country = '#country' 
     this.city = '#city'
     this.crediCard = "#card"
     this.month = "#month"
     this.year = "#year"
     this.purchaseButton = "//button[normalize-space()='Purchase']"
  }

  async orderInfo(Username, Country, City, CreditCard, Month, Year)
  {

    await this.page.locator(this.placeOrder).click();
    await this.page.locator(this.name).fill(Username)
    await this.page.locator(this.country).fill(Country)
    await this.page.locator(this.city).fill(City)
    await this.page.locator(this.crediCard).fill(CreditCard)
    await this.page.locator(this.month).fill(Month)
    await this.page.locator(this.year).fill(Year)
    await this.page.locator(this.purchaseButton).click();



    await this.page.on('dialog', async dialog => {
      if(dialog.message().includes('Thank you for your purchase!'))
      {
        await dialog.accept();
      }
    })
  }

}