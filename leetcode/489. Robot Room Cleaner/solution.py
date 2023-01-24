# """
# This is the robot's control interface.
# You should not implement it, or speculate about its implementation
# """
#class Robot:
#    def move(self):
#        """
#        Returns true if the cell in front is open and robot moves into the cell.
#        Returns false if the cell in front is blocked and robot stays in the current cell.
#        :rtype bool
#        """
#
#    def turnLeft(self):
#        """
#        Robot will stay in the same cell after calling turnLeft/turnRight.
#        Each turn will be 90 degrees.
#        :rtype void
#        """
#
#    def turnRight(self):
#        """
#        Robot will stay in the same cell after calling turnLeft/turnRight.
#        Each turn will be 90 degrees.
#        :rtype void
#        """
#
#    def clean(self):
#        """
#        Clean the current cell.
#        :rtype void
#        """

class Solution:
    def cleanRoom(self, robot):
        """
        :type robot: Robot
        :rtype: None
        """
        
        visited = set()
        directions = [[0,1],[1,0],[0,-1],[-1,0]]
        def helper(x=0, y=0, direction=0):
            if (direction >= 4):
                direction -= 4
            if (direction < 0):
                direction += 4
            if (x,y) in visited:
                robot.turnRight()
                robot.turnRight()
                robot.move()
                robot.turnRight()
                robot.turnRight()
            else:
                visited.add((x,y))
                if (robot.move()):
                    helper(x + directions[direction % 4][0], y + directions[direction % 4][1], direction % 4)
                robot.turnRight()
                if (robot.move()):                  
                    helper(x + directions[(direction+1) % 4][0], y + directions[(direction+1) % 4][1], (direction + 1) % 4)
                robot.turnRight()
                if(robot.move()):
                    helper(x + directions[(direction+2) % 4][0], y + directions[(direction+2) % 4][1], (direction + 2) % 4)
                robot.turnRight()
                if(robot.move()):
                    helper(x + directions[(direction+3) % 4][0], y + directions[(direction+3) % 4][1], (direction + 3) % 4) 
                robot.turnRight()
                robot.turnRight()
                robot.turnRight()
                robot.clean()
                robot.move()
                robot.turnRight()
                robot.turnRight()
    
        helper()
            
            
            
            
            
            