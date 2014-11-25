var surveyDriver = {};
surveyDriver.questionUrl = 'example.com';

/**
 * Adapted from driver.js. This function is needed for testing, but 
 * including the whole driver.js file in SpecRunner.html causes a redirect
 * to consent.html, so testing is prevented.
 */
function addQuestion(parentNode, question) {
  parentNode.appendChild(question.makeDOMTree());
}

describe('ssl-overridable-noproceed', function() {
  var parentNode;

  beforeEach(function() {
    parentNode = document.createElement('FORM');
    parentNode.name = 'testForm';
  });

  it('generates 11 questions', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend').length)
        .toEqual(11);
  });

  it('generates the not-proceed-choice question 1st', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[0].textContent)
        .toEqual('You chose the "Back to safety" option,' +
        ' or you closed the page. Why did you choose not to proceed to' +
        ' example.com?');
  });

  it('generates the page-meaning question 2nd', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[1].textContent)
        .toEqual('What was the page trying to tell you, in your own words?');
  });

  it('generates the page-source question and responses 3rd', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[2].textContent)
        .toEqual('Who do you think the page was from?');

    fieldsetElement = parentNode.getElementsByClassName('fieldset')[2];
    var labels = fieldsetElement.getElementsByTagName('label');
    expect(labels.length).toEqual(5);

    var labelTexts = '';
    for (var i = 0; i < labels.length; i++) {
      labelTexts += labels[i].textContent;
    }
    expect(labelTexts).toContain('Chrome (my browser)');
    expect(labelTexts).toContain('A hacker');
    expect(labelTexts).toContain('Windows');
    expect(labelTexts).toContain('example.com');
    expect(labelTexts).toContain('Other');
  });

  it('generates the 2 history questions and responses 4th and 5th', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[3].textContent)
        .toEqual('Have you visited example.com before?');
    expect(parentNode.getElementsByTagName('legend')[4].textContent)
        .toEqual('Have you seen a page like the one pictured above when' +
        ' trying to visit example.com before?');

    fieldsetElement = parentNode.getElementsByClassName('fieldset')[3];
    var labels = fieldsetElement.getElementsByTagName('label');
    expect(labels.length).toEqual(6);

    var labelTexts = '';
    for (var i = 0; i < labels.length; i++) {
      labelTexts += labels[i].textContent;
    }
    expect(labelTexts).toContain('Yes');
    expect(labelTexts).toContain('No');
    expect(labelTexts).toContain('I don\'t know');
  });

  it('generates the referrer question and responses 6th', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[5].textContent)
        .toEqual('What led you to the page?');
    fieldsetElement = parentNode.getElementsByClassName('fieldset')[4];
    var labels = fieldsetElement.getElementsByTagName('label');
    expect(labels.length).toEqual(6);

    var labelTexts = '';
    for (var i = 0; i < labels.length; i++) {
      labelTexts += labels[i].textContent;
    }
    expect(labelTexts).toContain('Entered or typed a URL');
    expect(labelTexts).toContain('Used a search engine');
    expect(labelTexts).toContain('Clicked link from an email message');
    expect(labelTexts).toContain('Clicked link in a chat window');
    expect(labelTexts).toContain('Clicked link on a web page');
    expect(labelTexts).toContain('Other');
  });

  it('generates the account question and responses 7th', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[6].textContent)
        .toEqual('Do you have an account on example.com?');

    fieldsetElement = parentNode.getElementsByClassName('fieldset')[5];
    var labels = fieldsetElement.getElementsByTagName('label');
    expect(labels.length).toEqual(4);

    var labelTexts = '';
    for (var i = 0; i < labels.length; i++) {
      labelTexts += labels[i].textContent;
    }
    expect(labelTexts).toContain('Yes');
    expect(labelTexts).toContain('No');
    expect(labelTexts).toContain('I\'m not sure');
    expect(labelTexts).toContain('I prefer not to answer');
  });

  it('generates the trust question and responses 8th', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[7].textContent)
        .toEqual('How much do you trust example.com?');

    fieldsetElement = parentNode.getElementsByClassName('fieldset')[6];
    var labels = fieldsetElement.getElementsByTagName('label');
    expect(labels.length).toEqual(5);

    var labelTexts = '';
    for (var i = 0; i < labels.length; i++) {
      labelTexts += labels[i].textContent;
    }
    expect(labelTexts).toContain('Strongly distrust');
    expect(labelTexts).toContain('Somewhat distrust');
    expect(labelTexts).toContain('Neither trust nor distrust');
    expect(labelTexts).toContain('Somewhat trust');
    expect(labelTexts).toContain('Strongly trust');
  });

  it('generates the attributes question and responses 9th', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[8].textContent)
        .toEqual('To what degree do each of the following adjectives describe this page?');

    fieldsetElement = parentNode.getElementsByClassName('fieldset')[7];
    var labels = fieldsetElement.getElementsByTagName('label');
    expect(labels.length).toEqual(5);

    var labelTexts = '';
    for (var i = 0; i < labels.length; i++) {
      labelTexts += labels[i].textContent;
    }
    expect(labelTexts).toContain('Not at all');
    expect(labelTexts).toContain('A little bit');
    expect(labelTexts).toContain('A moderate amount');
    expect(labelTexts).toContain('Very much');
    expect(labelTexts).toContain('A great deal');
  });

  it('generates the record-URL question and responses 10th', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[9].textContent)
        .toEqual('May we record the URL of the website you were trying' +
        ' to visit, example.com, with your responses?');

    fieldsetElement = parentNode.getElementsByClassName('fieldset')[8];
    var labels = fieldsetElement.getElementsByTagName('label');
    expect(labels.length).toEqual(2);

    var labelTexts = '';
    for (var i = 0; i < labels.length; i++) {
      labelTexts += labels[i].textContent;
    }
    expect(labelTexts).toContain('Yes');
    expect(labelTexts).toContain('No');
  });

  it('generates the clarification question 11th', function() {
    addQuestions(parentNode);
    expect(parentNode.getElementsByTagName('legend')[10].textContent)
        .toEqual('Please use this space to clarify any of your responses' +
        ' from above or let us know how we can improve this survey.');
  });

});
