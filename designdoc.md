#        Airline backend system

### objective :
 we need to build a backend system that can support different features for an airline company. Our end user is going to be someone who wants to book flights and query about flights, so we need a robust system to actually help them give best possible experience

 This doc is solely focus on the backend part of the system. We want to prepare the whole backend keeping in mind that the code base should be as maintainable as possible

 <!-- (may right a PRD(product requirement Doc)) -->


 ### Requirements: 


- A user should be able to search for flights from one place to another.
    - user should be able to source and destination details.
    - user should be able to select the date of the journey.
        -  _In _V2_ user should ne able to search for return flights and multicity flights._  
    - User should be able to select the class of the flights. (_not mandetory_)
    - User should be able to select the number of seats they want to book. 
    - Now based on the above data, we are going to list down the flights
    - We should show our users the best available flights at the top, based on time period of flight and then based on the price.
    - We need to support pagination so that we can list chunk of flights at one point of time
    - We should support filters of flights based on price, Departure time, duration, Airline, Stops.


- A user should be able to book a flight considering that user is registered on the platform.
    - Users should be able to cancel the booking and based on some criteria, we should initiate some refund for them.
    - Users should be able to request and book excess luggage for every flight
- For making a booking, the use has to make a payment (_dummy_)
- Tracking flight prices should be possible, the user should be notified  about any price drops or any delays or cancellation
- User should be able to list their previous flight and upcoming flights
- Users should be able to download boarding pass if they have done online check-in
- Online checkin mechanism should be supported
- Notification via email for completing online check-in  before 3 hours of departure.
- Notification to user about any flight delay.
- Users should be able to review the flight journey iff they have booked a flight
    - Review mechanism should involve star rating along with a comment
    - While listing any flight, we should also display the review of the flight
- Users should be able to authenticate to our system using email and password.
    - _V2 support ticekting where user can raise their queries._
    - _V2  prepare  seat selection_
- List FAQ which will be static data
- While making a booking  a person can reserve more than one seats with one login ID




## Non functional requirements

- We can expect that we are going to have more number of flight searches than flight bookings.
- The system needs to be accurate in terms of bookings.
- Expect that we are going to be having approx 1,00,000 total users, 5,00,000 bookings might come up in one quarter.
- So in one day, u can expect 5000 bookings.
- System should be capable of scaling up to atleast 3x the current estimated traffic.
- The system should handle realtime prices to flight prices, before the user makes the final booking.
- Concurrency should handled, using RDBMS should be a good solution




### Capacity Estimation:
- Storage estimates- 
    - For the upcoming 5 years, 80,00,000 bookings, 2,00,000 users approx, considering all the user records and booking records approx  Mb of data, then overall 10 TB of memory should be fine for our initial pilot run.

- Trafic estimates - If we consider 30:1 as the search to booking ratio, then at max, we expect 1,50,000 search queries a day. 2 query/s