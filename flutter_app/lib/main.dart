import 'dart:io';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_app/counter.dart';
import 'package:flutter_app/switcher.dart';
import 'package:flutter_app/thrower.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
//  int selectedPage;
//  bool isSwitching;
  //MyApp(this.selectedPage);
  //MyApp.switching(this.selectedPage, this.isSwitching);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: MyTabbedPage(0, false)
    );
  }
}

class MyTabbedPage extends StatefulWidget {
  MyTabbedPage(this.selectedPage, this.isSwitching, {Key key}) : super(key: key);
  final int selectedPage;
  final bool isSwitching;

  @override
  MyTabbedPageState createState() => MyTabbedPageState(this.selectedPage, this.isSwitching);
}

class MyTabbedPageState extends State<MyTabbedPage> with SingleTickerProviderStateMixin {
  int _selectedPage;
  bool _isSwitching;

  MyTabbedPageState(int selectedPage, bool isSwitching) {
    _selectedPage = selectedPage;
    _isSwitching = isSwitching;
  }

  @override
  void initState() {
    super.initState();
  }



  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        initialIndex: _selectedPage,
        child: Scaffold(
          backgroundColor: Colors.white,
          bottomNavigationBar: TabBar(
              labelColor: Colors.red,
              unselectedLabelColor: Colors.grey,
              tabs: [
                Tab(icon: Icon(Icons.add)),
                Tab(icon: Icon(Icons.repeat)),
                Tab(icon: Icon(Icons.warning)),
              ]
          ),
          body: TabBarView(
            physics: NeverScrollableScrollPhysics(),
            children: [
              Counter(title: 'Counter', isSwitching: _isSwitching,),
              Switcher(title: 'Switcher', isSwitching: _isSwitching),
              Thrower(title: 'Exception Thrower')
            ],
          ),
        )
    );
  }
}