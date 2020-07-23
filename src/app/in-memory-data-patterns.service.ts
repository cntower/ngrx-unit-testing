import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pattern } from './../app/app-store/pattern/pattern.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataPatternsService implements InMemoryDbService {
  createDb(): { patterns: Pattern[] } {
    const patterns = [
      {
        id: 1,
        name: 'Abstract factory',
        description:
          'factory groups object factories that have a common theme.',
        type: 'Creational',
      },
      {
        id: 2,
        name: 'Builder',
        description:
          'constructs complex objects by separating construction and representation.',
        type: 'Creational',
      },
      {
        id: 3,
        name: 'Factory method',
        description:
          'creates objects without specifying the exact class to create.',
        type: 'Creational',
      },
      {
        id: 4,
        name: 'Prototype',
        description: 'creates objects by cloning an existing object.',
        type: 'Creational',
      },
      {
        id: 5,
        name: 'Singleton',
        description:
          'restricts object creation for a class to only one instance.',
        type: 'Creational',
      },
      {
        id: 6,
        name: 'Adapter',
        description:
          'allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.',
        type: 'Structural',
      },
      {
        id: 7,
        name: 'Bridge',
        description:
          'decouples an abstraction from its implementation so that the two can vary independently.',
        type: 'Structural',
      },
      {
        id: 8,
        name: 'Composite',
        description:
          'composes zero-or-more similar objects so that they can be manipulated as one object.',
        type: 'Structural',
      },
      {
        id: 9,
        name: 'Decorator',
        description:
          'dynamically adds/overrides behaviour in an existing method of an object.',
        type: 'Structural',
      },
      {
        id: 10,
        name: 'Facade',
        description: 'provides a simplified interface to a large body of code.',
        type: 'Structural',
      },
      {
        id: 11,
        name: 'Flyweight',
        description:
          'reduces the cost of creating and manipulating a large number of similar objects.',
        type: 'Structural',
      },
      {
        id: 12,
        name: 'Proxy',
        description:
          'provides a placeholder for another object to control access, reduce cost, and reduce complexity.',
        type: 'Structural',
      },
      {
        id: 13,
        name: 'Chain of responsibility',
        description: 'delegates commands to a chain of processing objects.',
        type: 'Behavioral',
      },
      {
        id: 14,
        name: 'Command',
        description:
          'creates objects which encapsulate actions and parameters.',
        type: 'Behavioral',
      },
      {
        id: 15,
        name: 'Interpreter',
        description: 'implements a specialized language.',
        type: 'Behavioral',
      },
      {
        id: 16,
        name: 'Iterator',
        description:
          'accesses the elements of an object sequentially without exposing its underlying representation.',
        type: 'Behavioral',
      },
      {
        id: 17,
        name: 'Mediator',
        description:
          'allows loose coupling between classes by being the only class that has detailed knowledge of their methods.',
        type: 'Behavioral',
      },
      {
        id: 18,
        name: 'Memento',
        description:
          'provides the ability to restore an object to its previous state (undo).',
        type: 'Behavioral',
      },
      {
        id: 19,
        name: 'Observer',
        description:
          'is a publish/subscribe pattern which allows a number of observer objects to see an event.',
        type: 'Behavioral',
      },
      {
        id: 20,
        name: 'State',
        description:
          'allows an object to alter its behavior when its internal state changes.',
        type: 'Behavioral',
      },
      {
        id: 21,
        name: 'Strategy',
        description:
          'allows one of a family of algorithms to be selected on-the-fly at runtime.',
        type: 'Behavioral',
      },
      {
        id: 22,
        name: 'Template method',
        description: `defines the skeleton of an algorithm as /
          an abstract class, allowing its subclasses to provide concrete behavior.`,
        type: 'Behavioral',
      },
      {
        id: 23,
        name: 'Visitor',
        description:
          'separates an algorithm from an object structure by moving the hierarchy of methods into one object.',
        type: 'Behavioral',
      },
    ];
    return { patterns };
  }
}
