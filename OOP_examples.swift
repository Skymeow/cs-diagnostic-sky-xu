Class Car{
  wheels: Int
  make: Str
  model: Str
  color: Str
  top speed: Int
  init(wheels:Int, make:Str, model:Str, color:Str, top speed:Str){
    self.wheels = wheels
    self.make = make
    self.model = model
    self.color = color
    self.top speed = top speed
  }
  func honk()->Str{
    print("Beep Beep!")
  }
  func description()->Str{
    print(sorted([self.wheels, self.make, self.model, self.color, self.top speed]))
  }
}
