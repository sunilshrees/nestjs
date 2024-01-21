import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get user.' })
  async getUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }

  @Post()
  @ApiOperation({ summary: 'Create user.' })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user.' })
  async updateUserById(@Param('id',ParseIntPipe) id:number,
  @Body() updateUserDto: UpdateUserDto
  ) {
   const updateResp = await this.userService.updateUser(id,updateUserDto)
   return updateResp
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user.' })
  async deleteUserById(@Param('id',ParseIntPipe) id:number
  ) {
   const deleteResp = await this.userService.deleteUser(id)
   return deleteResp
  }

  @Post(':id/profile')
  @ApiOperation({ summary: 'Create User Profile.' })
  createUserProfile(
    @Param('id',ParseIntPipe) id:number,
    @Body() createUserProfileDto: CreateUserProfileDto) {
    return this.userService.createUserProfile(id,createUserProfileDto);
  }

  @Post(':id/posts')
  @ApiOperation({ summary: 'Create User Post.' })
  createUserPost(
    @Param('id',ParseIntPipe) id:number,
    @Body() createUserPostDto: CreateUserPostDto) {
    return this.userService.createUserPost(id,createUserPostDto);
  }
}
