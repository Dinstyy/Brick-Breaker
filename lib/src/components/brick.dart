import 'package:brick_breaker/audio/audio_controller.dart';
import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flutter/material.dart';

import '../brick_breaker.dart';
import '../config.dart';

class Brick extends RectangleComponent
    with CollisionCallbacks, HasGameReference<BrickBreaker> {
  Brick(
      {required super.position,
      required Color color,
      required AudioController audioController})
      : super(
          size: Vector2(brickWidth, brickHeight),
          anchor: Anchor.center,
          paint: Paint()
            ..color = color
            ..style = PaintingStyle.fill,
          children: [RectangleHitbox()],
        );

  @override
  void onCollisionStart(
      Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollisionStart(intersectionPoints, other);
    removeFromParent();
    game.score.value++;

    if (game.world.children.query<Brick>().length == 1) {
      game.playState = PlayState.won;
      game.nextLevel(); // Pindah ke level berikutnya ketika semua brick hancur
    }
  }
}
