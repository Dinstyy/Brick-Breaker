import 'package:flutter/material.dart'; // Add this import

const brickColors = [
  // Add this const
  Color(0xfff5004f),
  Color(0xffffaa80),
  Color(0xffff5580),
  Color(0xffff0080),
  Color(0xfff5004f),
  Color(0xffffaa80),
  Color(0xffff5580),
  Color(0xffff0080),
  Color(0xfff5004f),
  Color(0xffffaa80),
];

const gameWidth = 820.0;
const gameHeight = 1600.0;
const ballRadius = gameWidth * 0.02;
const batWidth = gameWidth * 0.2;
const batHeight = ballRadius * 2;
const batStep = gameWidth * 0.05;
const brickGutter = gameWidth * 0.015; // Add from here...
final brickWidth =
    (gameWidth - (brickGutter * (brickColors.length + 1))) / brickColors.length;
const brickHeight = gameHeight * 0.03;
const difficultyModifier = 1.03;                                // To here.