// Certificate class
var certificate = function(name,desc,price){
	this.name = name;
	this.desc = desc;
	this.price = price;
}

// All certs
// https://www.law.cornell.edu/cfr/text/14
let certs = {
	sport: new certificate('Sport',"<ul><strong>PRIVILEGES</strong><li>Operate as pilot in command of a sport pilot eligible aircraft.</li><li>Carry a single passenger and share expenses (fuel, oil, airport expenses, and aircraft rental).</li><li>Fly during the daytime using visual flight rules (VFR). Three statute miles visibility and visual contact with the ground are required.</li><li>Fly Cross-country anywhere in the U.S.</li><li>Fly up to 10,000 feet above mean sea level (MSL) or 2,000 feet above ground level (AGL), whichever is higher.</li><li>Fly in Class E and G airspace (and B, C, and D airspace with appropriate training).</li></ul><ul><strong>LIMITATIONS</strong><li>Fly in Class A airspace.</li><li>Fly in Class B, C, or D airspace until they receive training and a logbook endorsement from an instructor.</li><li>Fly outside the U.S. without prior permission from the foreign aviation authority.</li><li>Tow any object.</li></li></li><li>Fly while carrying a passenger or property for compensation or hire.</li></li><li>Fly in furtherance of a business.</li></ul>",'6,000'),
	private: new certificate('Private',"<ul><strong>PRIVILEGES & LIMITATIONS</strong><ol type='a'><li>Except as provided in paragraphs (b) through (h) of this section, no person who holds a private pilot certificate may act as pilot in command of an aircraft that is carrying passengers or property for compensation or hire; nor may that person, for compensation or hire, act as pilot in command of an aircraft.<li>A private pilot may, for compensation or hire, act as pilot in command of an aircraft in connection with any business or employment if:<ol type='1'><li>The flight is only incidental to that business or employment</li><li>The aircraft does not carry passengers or property for compensation or hire.</li></ol></li><li>A private pilot may not pay less than the pro rata share of the operating expenses of a flight with passengers, provided the expenses involve only fuel, oil, airport expenditures, or rental fees.</li><li>A private pilot may act as pilot in command of a charitable, nonprofit, or community event flight described in § 91.146, if the sponsor and pilot comply with the requirements of § 91.146.</li><li>A private pilot may be reimbursed for aircraft operating expenses that are directly related to search and location operations, provided the expenses involve only fuel, oil, airport expenditures, or rental fees, and the operation is sanctioned and under the direction and control of:<ol type='1'><li> A local, State, or Federal agency, or</li><li>An organization that conducts search and location operations.</li></ol></li><li>A private pilot who is an aircraft salesman and who has at least 200 hours of logged flight time may demonstrate an aircraft in flight to a prospective buyer.</li><li>A private pilot who meets the requirements of § 61.69 may act as a pilot in command of an aircraft towing a glider or unpowered ultralight vehicle.</li><li>A private pilot may act as pilot in command for the purpose of conducting a production flight test in a light-sport aircraft intended for certification in the light-sport category under § 21.190 of this chapter, provided that:<ol type='1'><li> The aircraft is a powered parachute or a weight-shift-control aircraft</li><li>The person has at least 100 hours of pilot-in-command time in the category and class of aircraft flown</li><li>The person is familiar with the processes and procedures applicable to the conduct of production flight testing, to include operations conducted under a special flight permit and any associated operating limitations.</li></ol></li><li>A private pilot may act as pilot in command of an aircraft without holding a medical certificate issued under part 67 of this chapter provided the pilot holds a valid U.S. driver's license, meets the requirements of § 61.23(c)(3), and complies with this section and all of the following conditions and limitations:<ol type='1'><li>The aircraft is authorized to carry not more than 6 occupants, has a maximum takeoff weight of not more than 6,000 pounds, and is operated with no more than five passengers on board</li><li>The flight, including each portion of the flight, is not carried out - <ol type='i'><li> At an altitude that is more than 18,000 feet above mean sea level</li><li> Outside the United States unless authorized by the country in which the flight is conducted; or</li><li> At an indicated airspeed exceeding 250 knots; and</li></ol></li><li> The pilot has available in his or her logbook -<ol type='i'><li>The completed medical examination checklist required under § 68.7 of this chapter</li><li>The certificate of course completion required under § 61.23(c)(3).</li></ol></li></ol></li></ul>",'10,000'),
	commercial: new certificate('Commercial',"<ul><strong>PRIVILEGES</strong><li>Carrying persons or property for compensation or hire, provided the person is qualified in accordance with this part and with the applicable parts of this chapter that apply to the operation</li><li>For compensation or hire, provided the person is qualified in accordance with this part and with the applicable parts of this chapter that apply to the operation.</li></ul><ul><strong>LIMITATIONS</strong><li>A person who applies for a commercial pilot certificate with an airplane category or powered-lift category rating and does not hold an instrument rating in the same category and class will be issued a commercial pilot certificate that contains the limitation, “The carriage of passengers for hire in (airplanes) (powered-lifts) on cross-country flights in excess of 50 nautical miles or at night is prohibited.” The limitation may be removed when the person satisfactorily accomplishes the requirements listed in § 61.65 of this part for an instrument rating in the same category and class of aircraft listed on the person's commercial pilot certificate.</li></ul>",'25,000'),
	cfi: new certificate('CFI',"<ul><strong>PRIVILEGES</strong><li>A person who holds a flight instructor certificate is authorized within the limitations of that person's flight instructor certificate and ratings to train and issue endorsements that are required for:<ol type='1'><li>A student pilot certificate</li><li>A pilot certificate</li><li>A flight instructor certificate</li><li>A ground instructor certificate</li><li>An aircraft rating</li><li>An instrument rating</li><li>A flight review, operating privilege, or recency of experience requirement of this part</li><li>A practical test</li><li>A knowledge test.</li></ol></li><li>A person who holds a flight instructor certificate is authorized, in a form and manner acceptable to the Administrator, to:<ol type='1'><li>Accept an application for a student pilot certificate or, for an applicant who holds a pilot certificate (other than a student pilot certificate) issued under part 61 of this chapter and meets the flight review requirements specified in § 61.56, a remote pilot certificate with a small UAS rating</li><li>Verify the identity of the applicant</li><li>Verify that an applicant for a student pilot certificate meets the eligibility requirements in § 61.83 or an applicant for a remote pilot certificate with a small UAS rating meets the eligibility requirements in § 107.61 of this chapter.</li></ol></li>"
,'9,000')
	// multi: new certificate('ME',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",'6,500')
};



