import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Thrower extends StatefulWidget {
  Thrower({Key key, this.title}) : super(key: key);
  final String title;

  @override
  ThrowerState createState() => ThrowerState();
}

class ThrowerState extends State<Thrower> {
  _throwException() {
    throw Exception("Something went wrong");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SizedBox(
          width: 250,
          height: 250,
          child: RaisedButton(
            shape: CircleBorder(),
            color: Colors.red,
            child: Text(
              'Throw\nException',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            onPressed: () { _throwException(); },
          )
        ),
      )
    );
  }
}