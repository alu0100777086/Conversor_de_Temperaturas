var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted1.innerHTML, "0.00 Celsius");
        assert.deepEqual(converted2.innerHTML, "273.15 Kelvin");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted1.innerHTML, "113.00 Fahrenheit");
        assert.deepEqual(converted2.innerHTML, "318.15 Kelvin");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted1.innerHTML, /ERROR/);
    });
    test('-15.4ºC = 4.28 Fahrenheit, 257.75 Kelvin', function() {
    original.value = "-15.4ºC";
    calculate();
    assert.deepEqual(converted1.innerHTML, "4.28 Fahrenheit");
    assert.deepEqual(converted2.innerHTML, "257.75 Kelvin");
    });
    test('0k = -273.15 Celsius, -459.67 Fahrenheit', function() {
        original.value = "0k";
        calculate();
        assert.deepEqual(converted1.innerHTML, "-273.15 Celsius");
        assert.deepEqual(converted2.innerHTML, "-459.67 Fahrenheit");
    });
});
