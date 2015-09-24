package paint1;

import java.awt.*;
import java.awt.event.*;
import java.applet.*;

public class PaintApplet extends Applet {
  public void init(){
    setBackground(Color.white);
  }
  public void paint(Graphics g) {
    int x, y, ancho, alto;
    int appletAlto = getSize().height;
    int appletAncho = getSize().width;

	for (int i=8; i>=0; i--) {
      if ((i % 2)==0) g.setColor(Color.red);
      else g.setColor(getBackground());
      alto = appletAlto*i/8;
      ancho = appletAncho*i/8;
      x=appletAncho/2-i*appletAncho/16;
      y=appletAlto/2-i*appletAlto/16;
      g.fillOval(x, y, ancho, alto);
    }
  }
}
