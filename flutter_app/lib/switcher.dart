import 'dart:async';
import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'main.dart';

class Switcher extends StatefulWidget {
  Switcher({Key key, this.title, this.isSwitching}) : super(key: key);
  final String title;
  final bool isSwitching;

  @override
  SwitcherState createState() => SwitcherState(isSwitching);
}

class SwitcherState extends State<Switcher> {
  bool _isSwitching;

  SwitcherState(bool isSwitching) {
    _isSwitching = isSwitching;
  }

  @override
  void initState() {
    super.initState();

    if (_isSwitching) {
      WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
        Timer(Duration(milliseconds: 30), () {
          Navigator.push(context,
              MaterialPageRoute(builder: (context) => MyTabbedPage(0, true)));
        });
      });
    }
  }

  _startSwitch() {
    Navigator.push(context,
        MaterialPageRoute(builder: (context) => MyTabbedPage(0, true)));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
          child: SizedBox(
            width: 300,
            height: 150,
            child: RaisedButton(
              shape: RoundedRectangleBorder(
                borderRadius: new BorderRadius.circular(15.0)
              ),
              color: Colors.redAccent,
              child: Text(
                'Initiate\nSwitch',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 24),
              ),
              onPressed: () { _startSwitch(); },
            ),
          ),
        )
    );
  }
}