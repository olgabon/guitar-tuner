/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use strict';
import { Component } from '@angular/core';
declare const p5;
declare const ml5;

@Component({
  selector: 'app-guitar-tuner',
  templateUrl: './guitar-tuner.component.html',
  styleUrls: ['./guitar-tuner.component.less']
})
export class GuitarTunerComponent {
  onCanvasHidden = false;
  createCanvas() {
    this.onCanvasHidden = true;
    new p5((p) => this.sketch(p));
  }
  private sketch(p) {
    let freq = 0;
    const notes = [
      { note: 'E', freq: 82.41 },
      { note: 'A', freq: 110.00 },
      { note: 'D', freq: 146.83 },
      { note: 'G', freq: 196.00 },
      { note: 'B', freq: 246.94 },
      { note: 'E', freq: 329.63 }
    ];
    p.setup = () => {
      p.createCanvas(350, 350);
      const modelUrl = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
      const audioContext = new AudioContext();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const mic = new p5.AudioIn();
      let pitch;
      mic.start(loadModel);

      function loadModel() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        pitch = ml5.pitchDetection(modelUrl, audioContext, mic.stream, modelLoaded);
      }

      function modelLoaded() {
        pitch.getPitch(gotPitch);
      }

      function gotPitch(error: string, frequency: number) {
        if (error) {
          console.error(error);
        }
        if (frequency) {
            freq = frequency;
        }
        pitch.getPitch(gotPitch);
      }
    };

    p.draw = () => {
      let noteDetected;
      let toneDiff = Infinity;
      notes.forEach(note => {
        const diff = freq - note.freq;
        if (p.abs(diff) < p.abs(toneDiff)) {
          noteDetected = note;
          toneDiff = diff;
        }
      });
      const difference = toneDiff;
      p.background(248, 248, 248);
      p.fill(161, 161, 161);
      p.circle(p.width / 2, p.height / 2 - 75, 150);
      if (p.abs(difference) < 1) {
        p.fill(27, 166, 36);
        p.circle(p.width / 2, p.height / 2 - 75, 150);
        p.text('Hold there', p.width / 2, p.height - 20);
      }
      if (difference > 1) {
        p.fill(237, 45, 45);
        p.circle(p.width / 2 + difference / 2, p.height / 2 - 75, 150);
        p.text('Tune Down', p.width / 2, p.height - 20);
      }
      if (difference < -1 ) {
        p.fill(245, 173, 73);
        p.circle(p.width / 2 + difference / 2, p.height / 2 - 75, 150);
        p.text('Tune Up', p.width / 2, p.height - 20);
      }
      p.noStroke();
      p.fill(56, 56, 56);
      p.textAlign(p.CENTER);
      p.textSize(38);
      p.text(noteDetected.note, p.width / 2, p.height / 2 - 68);
    };
  }
}
