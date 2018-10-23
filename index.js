let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

///

class Driver {

  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter (
      function(trip) {
        return trip.driverId === this.id
      }.bind(this)
    )
  }

  passengers() {
    return store.passengers.filter (
      function(passenger) {
        return passenger.tripId === this.tripId
      }.bind(this)
    )
  }
}

///

class Passenger {

  constructor(name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter (
      function(driver) {
        return driver.tripId === this.tripId
      }.bind(this)
    )
  }

  drivers() {
    return store.drivers.filter (
      function(driver) {
        return driver.tripId === this.tripId
      }.bind(this)
    )
  }
}

///

class Trip {

  constructor(driver, passenger) {

    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId

    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        passenger.tripId = this.id
        passenger.driverId = this.driverId
        return this.passengerId === passenger.id
      }.bind(this)
    )
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        driver.tripId = this.id
        driver.passengerId = this.passengerId
        return this.driverId === driver.id
      }.bind(this)
    )
  }
}
