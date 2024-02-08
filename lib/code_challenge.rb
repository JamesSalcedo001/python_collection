# Arrays



# 1: Two Sum



# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.


def two_sum(nums, target)
    nums.each_with_index do |num1, i|
        nums.each_with_index do |num2, j|
            return [i, j] if i != j && num1 + num2 == target
        end
    end
    []
end


puts two_sum([3, 3], 6)

# 2:

# 3:

# 4:

# 5:

# 6:

# 7:

# 8:

# 9:

# 10: