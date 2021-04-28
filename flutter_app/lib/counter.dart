import 'dart:async';
import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'main.dart';

class Counter extends StatefulWidget {
  Counter({Key key, this.title, this.isSwitching}) : super(key: key);
  final String title;
  final bool isSwitching;

  @override
  CounterState createState() => CounterState(this.isSwitching);
}

class CounterState extends State<Counter> {
  int _counter = 0;
  bool _isSwitching;

  CounterState(bool isSwitching) {
    _isSwitching = isSwitching;
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _decreaseCounter() {
    setState(() {
      _counter--;
    });
  }

  @override
  void initState() {
    super.initState();

    if (_isSwitching) {
      WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
        Timer(Duration(milliseconds: 30), () {
          Navigator.push(context,
              MaterialPageRoute(builder: (context) => MyTabbedPage(1, true)));
        });
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox.expand(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              '$_counter',
              style: TextStyle(fontSize: 150 ),
            ),
            SizedBox(
              width: 250,
              height: 75,
              child: RaisedButton(
                shape: RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(15.0)
                ),
                color: Colors.lightGreen,
                child: Text(
                  '+',
                  style: TextStyle(fontSize: 40),
                ),
                onPressed: () { _incrementCounter(); },
              )
            ),
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: SizedBox(
                  width: 200,
                  height: 60,
                  child: RaisedButton(
                    shape: RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(15.0)),
                    color: Colors.redAccent,
                    child: Text(
                      '-',
                      style: TextStyle(fontSize: 30),
                    ),
                    onPressed: () { _decreaseCounter(); },
                  )
              ),
            )
          ],
        ),
      ),
    );
  }
}