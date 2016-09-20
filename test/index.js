var should = require('chai').should(),
  emailValidate = require('../src/index');

describe('#Valid email addresses:', function() {
  it('simple@example.com', function() {
    emailValidate('simple@example.com').should.equal(true);
  });
  it('very.common@example.com', function() {
    emailValidate('very.common@example.com').should.equal(true);
  });
  it('disposable.style.email.with+symbol@example.com', function() {
    emailValidate('disposable.style.email.with+symbol@example.com').should.equal(true);
  });
  it('other.email-with-dash@example.com', function() {
    emailValidate('other.email-with-dash@example.com').should.equal(true);
  });
  it('x@example.com', function() {
    emailValidate('x@example.com').should.equal(true);
  });
  it('"much.more unusual"@example.com', function() {
    emailValidate('"much.more unusual"@example.com').should.equal(true);
  });
  it('"very.unusual.@.unusual.com"@example.com', function() {
    emailValidate('"very.unusual.@.unusual.com"@example.com').should.equal(true);
  });
  it('"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com', function() {
    emailValidate('"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com').should.equal(true);
  });
  it('example-indeed@strange-example.com', function() {
    emailValidate('example-indeed@strange-example.com').should.equal(true);
  });
  it("#!$%&'*+-/=?^_`{}|~@example.org", function() {
    emailValidate("#!$%&'*+-/=?^_`{}|~@example.org").should.equal(true);
  });
  it('"()<>[]:,;@\\\"!#$%&\'-/=?^_`{}| ~.a"@example.org', function() {
    emailValidate('"()<>[]:,;@\\\"!#$%&\'-/=?^_`{}| ~.a"@example.org').should.equal(true);
  });
  it('" "@example.org', function() {
    emailValidate('" "@example.org').should.equal(true);
  });
  it('example@s.solutions', function() {
    emailValidate('example@s.solutions').should.equal(true);
  });
});

describe('#Invalid email addresses:', function() {
  it('Abc.example.com', function() {
    emailValidate('Abc.example.com').should.equal(false);
  });
  it('A@b@c@example.com', function() {
    emailValidate('A@b@c@example.com').should.equal(false);
  });
  it('a"b(c)d,e:f;g<h>i[j\k]l@example.com', function() {
    emailValidate('a"b(c)d,e:f;g<h>i[j\k]l@example.com').should.equal(false);
  });
  it('just"not"right@example.com', function() {
    emailValidate('just"not"right@example.com').should.equal(false);
  });
  it('this is"not\allowed@example.com', function() {
    emailValidate('this is"not\allowed@example.com').should.equal(false);
  });
  it('this\ still\"not\\allowed@example.com', function() {
    emailValidate('this\ still\"not\\allowed@example.com').should.equal(false);
  });
  it('john..doe@example.com', function() {
    emailValidate('john..doe@example.com').should.equal(false);
  });
  it('john.doe@example..com', function() {
    emailValidate('john.doe@example..com').should.equal(false);
  });
  it('example@localhost', function() {
    emailValidate('example@localhost').should.equal(false);
  });
});