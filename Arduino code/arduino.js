int led2 = 2;
int led3 = 3;
int led4 = 4;
int led5 = 5;

void setup() {
    // put your setup code here, to run once:
    pinMode(led2, OUTPUT);
    pinMode(led3, OUTPUT);

    pinMode(led4, OUTPUT);
    pinMode(led5, OUTPUT);

}

void loop() {
    digitalWrite(led2, HIGH); // turn the LED on (HIGH is the voltage level)
    delay(1000); // wait for a second
    digitalWrite(led2, LOW); // turn the LED off by making the voltage LOW
    delay(1000);

    digitalWrite(led3, HIGH); // turn the LED on (HIGH is the voltage level)
    delay(1000); // wait for a second
    digitalWrite(led3, LOW); // turn the LED off by making the voltage LOW
    delay(1000);

    digitalWrite(led4, HIGH); // turn the LED on (HIGH is the voltage level)
    delay(1000); // wait for a second
    digitalWrite(led4, LOW); // turn the LED off by making the voltage LOW
    delay(1000);

    digitalWrite(led5, HIGH); // turn the LED on (HIGH is the voltage level)
    delay(1000); // wait for a second
    digitalWrite(led5, LOW); // turn the LED off by making the voltage LOW
    delay(1000);
}